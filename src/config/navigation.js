import Introduction from "../docs/introduction";
import Installation from "../docs/installation";
import Features from "../docs/features";
import DeleteAccount from "../docs/delete-account";

export const navigation = [
  {
    section: "Getting Started",
    pages: [
      {
        title: "Introduction",
        path: "/",
        component: Introduction,
        description: "Project overview",
      },
      {
        title: "Installation",
        path: "/installation",
        component: Installation,
        description: "Development setup",
      },
    ],
  },

  {
    section: "Documentation",
    pages: [
      {
        title: "Features",
        path: "/features",
        component: Features,
        description: "Complete feature guide",
      },
    ],
  },

  {
    section: "Support",
    pages: [
      {
        title: "Delete Account",
        path: "/delete-account",
        component: DeleteAccount,
        description: "Delete your Spotlight account",
      },
    ],
  },
];

export const allPages = navigation.flatMap(
  (section) => section.pages
);