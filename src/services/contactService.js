/**
 * Envoie les données du formulaire de contact au script PHP (hébergement Hostinger).
 * Utilise VITE_CONTACT_ENDPOINT si défini (pratique en dev pour pointer vers le domaine réel).
 */
export const sendContactEmail = async (payload) => {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/mail.php';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  // Tente de parser le JSON, sinon récupère le texte pour aider au debug
  const data = await response.json().catch(async () => {
    const text = await response.text().catch(() => '');
    return { success: false, error: text || 'Invalid response' };
  });

  if (!response.ok || data.success !== true) {
    const message = data.error || 'Failed to send contact message';
    throw new Error(message);
  }

  return data;
};
