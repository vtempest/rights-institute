// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: "category",
      label: "CAUSE",
      items: [
        {
          type: "doc",
          id: "functions/CAUSE/CAUSEMainPage",
          label: "CAUSEMainPage"
        },
        {
          type: "doc",
          id: "functions/CAUSE/Footer",
          label: "Footer"
        },
        {
          type: "doc",
          id: "functions/CAUSE/Navigation",
          label: "Navigation"
        }
      ]
    },
    {
      type: "category",
      label: "ContentSections",
      items: [
        {
          type: "doc",
          id: "functions/ContentSections/Conclusion",
          label: "Conclusion"
        },
        {
          type: "doc",
          id: "functions/ContentSections/Header",
          label: "Header"
        },
        {
          type: "doc",
          id: "functions/ContentSections/Preparation",
          label: "Preparation"
        },
        {
          type: "doc",
          id: "functions/ContentSections/Principle",
          label: "Principle"
        },
        {
          type: "doc",
          id: "functions/ContentSections/Problems",
          label: "Problems"
        },
        {
          type: "doc",
          id: "functions/ContentSections/Rights",
          label: "Rights"
        },
        {
          type: "doc",
          id: "functions/ContentSections/Understandings",
          label: "Understandings"
        }
      ]
    },
    {
      type: "category",
      label: "Effects",
      items: [
        {
          type: "doc",
          id: "functions/Effects/BorderBeam",
          label: "BorderBeam"
        },
        {
          type: "doc",
          id: "functions/Effects/GlowWrapper",
          label: "GlowWrapper"
        },
        {
          type: "doc",
          id: "functions/Effects/Meteors",
          label: "Meteors"
        },
        {
          type: "doc",
          id: "functions/Effects/MorphText",
          label: "MorphText"
        },
        {
          type: "doc",
          id: "functions/Effects/ParticleText",
          label: "ParticleText"
        },
        {
          type: "doc",
          id: "functions/Effects/ShinyText",
          label: "ShinyText"
        },
        {
          type: "doc",
          id: "functions/Effects/VaporizeText",
          label: "VaporizeText"
        }
      ]
    },
    {
      type: "category",
      label: "InteractiveApps",
      items: [
        {
          type: "doc",
          id: "functions/InteractiveApps/GameOfLife",
          label: "GameOfLife"
        },
        {
          type: "doc",
          id: "functions/InteractiveApps/GlobeAnimation",
          label: "GlobeAnimation"
        },
        {
          type: "doc",
          id: "functions/InteractiveApps/QuantumGeometry",
          label: "QuantumGeometry"
        },
        {
          type: "doc",
          id: "functions/InteractiveApps/SpiralAnimation",
          label: "SpiralAnimation"
        }
      ]
    }
  ]
};
module.exports = typedocSidebar.items;