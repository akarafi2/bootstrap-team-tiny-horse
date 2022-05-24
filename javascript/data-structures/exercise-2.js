let course = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"],
  students: [
    {
      name: "Steve",
      computer: {
        OS: "Linux",
        type: "laptop",
      },
    },
    {
      name: "Katy",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
    {
      name: "Chuck",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
  ],
  preReqs: {
    skills: ["html", "css", "git"],
    equipment: {
      laptop: true,
      OSOptions: ["linux", "osx"],
    },
  },
};

// Name of the course ('JavaScript Applications')

// Name of the second teacher ('Shane')

// Name of the first student ('Steve')

// Katy's computer type ('macbook')

// The preReq equipment object

// The second OSOption from equipment prereqs ('osx')

// String listing the OSOptions separated by 'or' ('linux or osx')

// An array of all the students that are using osx