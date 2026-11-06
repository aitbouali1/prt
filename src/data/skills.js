// ============================================================================
// TECHNICAL SKILLS — grouped toolkit. Each skill has an id (icon) and a list
// of sub-skills. No proficiency percentages are shown anywhere (per spec).
//
// `icon` values map to <SkillIcon> in components/Skills.jsx. To change an icon,
// edit that component's icon map — keep the id here stable.
// ============================================================================

export const skillGroups = [
  {
    name: "Python",
    icon: "python",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "Exploratory Data Analysis",
    ],
  },
  {
    name: "SQL",
    icon: "sql",
    skills: [
      "Data Extraction",
      "Data Filtering",
      "Joins",
      "Aggregations",
      "Database Queries",
    ],
  },
  {
    name: "Microsoft Excel",
    icon: "excel",
    skills: [
      "Advanced Formulas",
      "Pivot Tables",
      "Data Cleaning",
      "Data Visualization",
      "Interactive Dashboards",
    ],
  },
  {
    name: "Power BI",
    icon: "powerbi",
    skills: [
      "Data Modeling",
      "Power Query",
      "DAX",
      "Interactive Dashboards",
      "Business Intelligence",
    ],
  },
]
