import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '838'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'a67'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '80a'),
            routes: [
              {
                path: '/docs/functions/',
                component: ComponentCreator('/docs/functions/', '248'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/CAUSE/CAUSEMainPage',
                component: ComponentCreator('/docs/functions/CAUSE/CAUSEMainPage', '931'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/CAUSE/Footer',
                component: ComponentCreator('/docs/functions/CAUSE/Footer', '25e'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/CAUSE/Navigation',
                component: ComponentCreator('/docs/functions/CAUSE/Navigation', 'a63'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Conclusion',
                component: ComponentCreator('/docs/functions/ContentSections/Conclusion', 'c60'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Header',
                component: ComponentCreator('/docs/functions/ContentSections/Header', '0c1'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Preparation',
                component: ComponentCreator('/docs/functions/ContentSections/Preparation', 'b29'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Principle',
                component: ComponentCreator('/docs/functions/ContentSections/Principle', '27d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Problems',
                component: ComponentCreator('/docs/functions/ContentSections/Problems', '7a4'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Rights',
                component: ComponentCreator('/docs/functions/ContentSections/Rights', '4b5'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/ContentSections/Understandings',
                component: ComponentCreator('/docs/functions/ContentSections/Understandings', '2cf'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/BorderBeam',
                component: ComponentCreator('/docs/functions/Effects/BorderBeam', 'ea0'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/GlowWrapper',
                component: ComponentCreator('/docs/functions/Effects/GlowWrapper', 'bc4'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/Meteors',
                component: ComponentCreator('/docs/functions/Effects/Meteors', '0be'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/MorphText',
                component: ComponentCreator('/docs/functions/Effects/MorphText', '30f'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/ParticleText',
                component: ComponentCreator('/docs/functions/Effects/ParticleText', '07f'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/ShinyText',
                component: ComponentCreator('/docs/functions/Effects/ShinyText', '39d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/Effects/VaporizeText',
                component: ComponentCreator('/docs/functions/Effects/VaporizeText', '929'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/InteractiveApps/GameOfLife',
                component: ComponentCreator('/docs/functions/InteractiveApps/GameOfLife', 'a44'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/InteractiveApps/GlobeAnimation',
                component: ComponentCreator('/docs/functions/InteractiveApps/GlobeAnimation', '57b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/InteractiveApps/QuantumGeometry',
                component: ComponentCreator('/docs/functions/InteractiveApps/QuantumGeometry', '9e1'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/InteractiveApps/SpiralAnimation',
                component: ComponentCreator('/docs/functions/InteractiveApps/SpiralAnimation', '026'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/functions/modules',
                component: ComponentCreator('/docs/functions/modules', '6fc'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/consciousness-emergence-framework',
                component: ComponentCreator('/docs/research/consciousness-emergence-framework', '58d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Emergent Complexity in Virtual Worlds_ How Autonom',
                component: ComponentCreator('/docs/research/Emergent Complexity in Virtual Worlds_ How Autonom', '4d5'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Modified Framework for AI Consciousness Emergence',
                component: ComponentCreator('/docs/research/Modified Framework for AI Consciousness Emergence', '757'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/NKS Complexity Theory',
                component: ComponentCreator('/docs/research/NKS Complexity Theory', 'a45'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Rules for Consciousness Emergence',
                component: ComponentCreator('/docs/research/Rules for Consciousness Emergence', '51d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/research/Step Consciousness Emergence Framework',
                component: ComponentCreator('/docs/research/Step Consciousness Emergence Framework', 'e0b'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '0f3'),
                exact: true,
                sidebar: "default"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
