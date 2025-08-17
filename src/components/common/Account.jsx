import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { generateLicenseKey } from "../../utils/license";

export default function Account() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Charger le profil depuis Supabase
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (!error && data) {
          setProfile(data);
        } else {
          // Si aucun profil, on en crée un avec une licence
          const newProfile = {
            id: user.id,
            company: "",
            address: "",
            vat: "",
            license_key: generateLicenseKey(),
            subscription_type: "quarterly",
          };
          await supabase.from("profiles").insert([newProfile]);
          setProfile(newProfile);
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  // Mise à jour du profil
  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");

    const { error } = await supabase
      .from("profiles")
      .update({
        company: profile.company,
        address: profile.address,
        vat: profile.vat,
        subscription_type: profile.subscription_type,
      })
      .eq("id", profile.id);

    if (error) {
      setMessage("❌ Erreur lors de la mise à jour");
    } else {
      setMessage("✅ Profil mis à jour avec succès");
    }
  };

  if (loading) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Mon espace client</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Nom de société"
          value={profile.company || ""}
          onChange={(e) => setProfile({ ...profile, company: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Adresse"
          value={profile.address || ""}
          onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Numéro TVA"
          value={profile.vat || ""}
          onChange={(e) => setProfile({ ...profile, vat: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <div>
          <label className="block font-medium">Numéro de licence</label>
          <p className="bg-gray-100 p-2 rounded">{profile.license_key}</p>
        </div>

        <div>
          <label className="block font-medium">Abonnement</label>
          <select
            value={profile.subscription_type}
            onChange={(e) =>
              setProfile({ ...profile, subscription_type: e.target.value })
            }
            className="w-full border p-2 rounded"
          >
            <option value="quarterly">Trimestriel</option>
            <option value="annual">Annuel</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Sauvegarder
        </button>
      </form>
    </div>
  );
}