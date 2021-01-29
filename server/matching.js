let organization = {
  id: 7,
  name: 'test org',
  attributes: ['location', 'gender', 'focus', 'companySize']
};

let mentees = [
  {
    id: 2,
    firstName: 'Anne',
    lastName: 'Smithson',
    email: 'email@email.com',
    org_id: 7,
    paired: false,
    attributes: {
      location: {
        choices: ['Boston'],
        priority: 5,
        comments: 'words words'
      },
      gender: {
        choices: ['woman'],
        priority: 3,
        comments: 'words words'
      },
      focus: {
        choices: ['frontend', 'full-stack', 'backend'],
        priority: 3,
        comments: 'words words'
      },
      companySize: {
        choices: ['50-100'],
        priority: 4, 
        comments: 'words words'
      }
    }
  },
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'email@email.com',
    org_id: 7,
    paired: false,
    attributes: {
      location: {
        choices: ['Seattle', 'Chicago', 'Dallas'],
        priority: 3,
        comments: 'words words'
      },
      gender: {
        choices: ['woman'],
        priority: 5,
        comments: 'words words'
      },
      focus: {
        choices: ['frontend', 'full-stack'],
        priority: 3,
        comments: 'words words'
      },
      companySize: {
        choices: ['1-50', '50-100', '100-200', '200-500', '500+'],
        priority: 2,
        comments: 'words words'
      }
    }
  }
]

let mentors = [
  {
    id: 1,
    firstName: 'Chloe',
    lastName: 'Johnson',
    email: 'email@email.com',
    org_id: 7,
    paired: false,
    attributes: {
      location: 'Seattle',
      gender: 'woman',
      focus: 'backend',
      companySize: '200-500'
    }
  },
  {
    id: 2,
    firstName: 'Chris',
    lastName: 'Washington',
    email: 'email@email.com',
    org_id: 7,
    paired: false,
    attributes: {
      location: 'New York',
      gender: 'man',
      focus: 'full-stack',
      companySize: '500+'
    }
  }
];

const createRankings = (mentees, attributes, mentors) => {
  const rankings = {};

  mentees.forEach(mentee => {
    rankings[mentee.id] = {};
    rankings[mentee.id].scores = calculateMentorScores(mentee, attributes, mentors);
    rankings[mentee.id].rankedMentors = orderMentors(mentee, rankings[mentee.id].scores);
  });

  return rankings;
};

const orderMentors = (mentee, scores) => {
  const mentorsWithScores = [];

  for (let key in scores) {
    mentorsWithScores.push({mentorId: key, score: scores[key]})
  }

  return mentorsWithScores.sort((a, b) => (a.score > b.score) ? -1 : 1)
};

const calculateMentorScores = (mentee, attributes, mentors) => {
  const scores = {};

  mentors.forEach(mentor => {
    let score = 0;
    attributes.forEach(attribute => {
      if (mentee.attributes[attribute].choices.includes(mentor.attributes[attribute])) {
        score += mentee.attributes[attribute].priority;
      }
    });
    scores[mentor.id] = score;
  });

  return scores;
};


const createMatches = (mentees, attributes, mentors) => {
  const rankings = createRankings(mentees, attributes, mentors);

  const results = {
    matches: {},
    unmatchedMentees: []
  };
  
  // attempt to match mentee with top ranked mentor
  // if mentor already taken, compare score for that mentor with existing match's score
  // if higher, override that existing match, and existing match will get matched again
  // if lower, pass through function again, this time at the next mentor ranking index (second choice, third, etc)
  
  const makeMatch = (menteeId, mentorRankIdx) => {
    const topMentorId = rankings[menteeId].rankedMentors[mentorRankIdx].mentorId;
    if (!results.matches[topMentorId]) {
      results.matches[topMentorId] = menteeId;
      return;
    } else if (mentorRankIdx === mentors.length) {
      results.unmatchedMentees.push(menteeId);
      return;
    } else {
      let existingMatchId = results.matches[topMentorId]
      if (rankings[menteeId].scores[topMentorId] > rankings[existingMatchId].scores[topMentorId]) {
        results.matches[topMentorId] = menteeId;
        makeMatch(existingMatchId, 1);
      } else {
        makeMatch(menteeId, mentorRankIdx + 1);
      }
    }
  };

  for (let menteeId in rankings) {
    makeMatch(menteeId, 0)
  }

  return results;
};

createMatches(mentees, organization.attributes, mentors);