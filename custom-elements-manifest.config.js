import { litPlugin } from '@custom-elements-manifest/analyzer/src/features/framework-plugins/lit/lit.js';

export default {
  globs: ['src/**/*.ts'], 
  outdir: '.',
  litelement: true,
  plugins: [
    litPlugin(),
    {
      name: 'filter-private-members',
      analyzePhase({ ts, node, moduleDoc }) {
        moduleDoc.declarations?.forEach(declaration => {
          if (declaration.members) {
            declaration.members = declaration.members.filter(member => {
              if (member.privacy === 'private' || member.privacy === 'protected') {
                return false;
              }
              if (member.name.startsWith('_')) {
                return false;
              }
              if (member.jsDoc && member.jsDoc.includes('@internal')) {
                  return false;
              }

              return true;
            });
          }
        });
      }
    }
  ]
};