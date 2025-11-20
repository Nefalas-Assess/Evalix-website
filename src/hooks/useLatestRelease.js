import { useEffect, useState } from 'react';

const DEFAULT_VERSION = '1.0.0';

const DEFAULT_DOWNLOAD_LINKS = {
  windows: `https://github.com/Nefalas-Assess/Assess-calculator/releases/download/v${DEFAULT_VERSION}/Evalix-${DEFAULT_VERSION}.exe`,
  macos: `https://github.com/Nefalas-Assess/Assess-calculator/releases/download/v${DEFAULT_VERSION}/Evalix-${DEFAULT_VERSION}.dmg`
};

const RELEASES_URL = 'https://api.github.com/repos/Nefalas-Assess/Assess-calculator/releases/latest';

const normalizeVersion = (tagName = '') => tagName.replace(/^v/i, '').trim();

const extractVersionFromAssets = (assets = []) => {
  const versionMatch = assets
    .map((asset) => asset.name)
    .filter(Boolean)
    .map((name) => name.match(/Evalix-([\d.]+)\.(exe|dmg|zip)/i))
    .find(Boolean);

  return versionMatch ? versionMatch[1] : null;
};

export const useLatestRelease = () => {
  const [downloadLinks, setDownloadLinks] = useState(DEFAULT_DOWNLOAD_LINKS);
  const [version, setVersion] = useState(DEFAULT_VERSION);

  useEffect(() => {
    let isMounted = true;

    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(RELEASES_URL);
        if (!response.ok) throw new Error('Unable to fetch release');

        const data = await response.json();
        const assets = Array.isArray(data.assets) ? data.assets : [];
        const findAsset = (ext) =>
          assets.find((asset) => asset.name?.toLowerCase().endsWith(ext))?.browser_download_url;

        const normalizedVersion =
          normalizeVersion(data.tag_name) ||
          extractVersionFromAssets(assets) ||
          DEFAULT_VERSION;

        if (!isMounted) return;

        setDownloadLinks({
          windows: findAsset('.exe') || DEFAULT_DOWNLOAD_LINKS.windows,
          macos: findAsset('.dmg') || DEFAULT_DOWNLOAD_LINKS.macos
        });
        setVersion(normalizedVersion);
      } catch (error) {
        console.error('Failed to load latest release:', error);
        if (isMounted) {
          setDownloadLinks(DEFAULT_DOWNLOAD_LINKS);
          setVersion(DEFAULT_VERSION);
        }
      }
    };

    fetchLatestRelease();

    return () => {
      isMounted = false;
    };
  }, []);

  return { downloadLinks, version };
};

export const defaultDownloadLinks = DEFAULT_DOWNLOAD_LINKS;
export const defaultVersion = DEFAULT_VERSION;
