import axios from 'axios';
import { useEffect, useState } from 'react';

interface GitHubContent {
  name: string;
  path: string;
  type: 'file' | 'dir';
  url: string;
}

interface HookReturn {
  loading: boolean;
  error: Error | null;
  modules: number;
}

const useModuleCount = (repoUrl: string): HookReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [modules, setModules] = useState<number>(0);

  useEffect(() => {
    const fetchFilesCount = async () => {
      try {
        const directoriesToCheck = ['base', 'client', 'combat', 'misc', 'movement', 'player', 'render'];

        let totalCount = 0;

        const countFilesRecursively = async (directory: string) => {
          const apiUrl = `https://api.github.com/repos/Pan4ur/ThunderHack-Recode/contents/src/main/java/thunder/hack/modules/${directory}`;
          const response = await axios.get<GitHubContent[]>(apiUrl);

          for (const item of response.data) {
            if (item.type === 'file') {
              totalCount++;
            } else if (item.type === 'dir') {
              await countFilesRecursively(item.path);
            }
          }
        };

        for (const dir of directoriesToCheck) {
          await countFilesRecursively(dir);
        }

        setModules(totalCount);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    if (repoUrl) {
      fetchFilesCount();
    }
  }, [repoUrl]);

  return { loading, error, modules };
};

export default useModuleCount;
