export default function RegulationsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        <a
          href="/"
          className="mb-10 inline-block text-red-500 hover:text-red-400"
        >
          ← Back
        </a>

        {/* HEADER */}
        <div className="mb-20">

          <div className="text-sm uppercase tracking-[0.3em] text-red-400">
            Official Regulations
          </div>

          <h1 className="mt-4 text-6xl font-black md:text-7xl">
            GP WORLD CUP
          </h1>

          <h2 className="mt-2 text-3xl font-bold text-zinc-400">
            Terms & Conditions
          </h2>

        </div>

        {/* CONTENT */}
        <div className="space-y-10">

          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8"
            >

              <h2 className="text-3xl font-black">
                {section.title}
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-300 whitespace-pre-line">
                {section.content}
              </div>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-20 border-t border-white/10 pt-10 text-center text-zinc-500">
          © GP World Cup — All Rights Reserved
        </div>

      </div>

    </div>
  );
}

const sections = [
  {
    title: "1. Introduction",
    content: `
The GP World Cup is an independent fan-created motorsport project designed to imagine a world championship competition between national teams in motorcycle racing.

The concept combines elements of international competition, rider selection, national identity, and custom motorcycle liveries in a fictional championship format created for entertainment and community purposes.

The GP World Cup is not an official motorsport championship and does not operate under any official motorcycle racing governing body.
`,
  },

  {
    title: "2. Legal Disclaimer & Independence Statement",
    content: `
The GP World Cup is a completely independent fan-made project.

This project is NOT affiliated with, endorsed by, sponsored by, or connected to:

• Dorna Sports
• MotoGP
• FIM
• Any official motorcycle racing championship, manufacturer, or governing organization

This project is created purely for entertainment, creative world-building, community engagement, and digital content creation purposes.

All references to riders, countries, motorcycles, circuits, teams, or manufacturers are used in a transformative and fictional fan-content context.

The GP World Cup operates as a fanpage-style fictional competition concept and is not intended to confuse viewers into believing it is an official championship or MotoGP-related organization.
`,
  },

  {
    title: "3. Championship Concept",
    content: `
The GP World Cup is based on national representation.

Instead of traditional factory or satellite teams, riders compete for their countries.

Each nation fields:

• 2 official riders
• 1 reserve rider

The reserve rider may replace a main rider in cases of injury, illness, suspension, or unavailability.

The championship focuses on national pride, rivalries between countries, team strategy, and fan engagement.
`,
  },

  {
    title: "4. Eligible Countries",
    content: `
The organizer selects participating nations.

Selection criteria may include rider availability, competitiveness, fan popularity, historical importance in motorcycle racing, and marketing potential.

The organizer reserves the right to modify participating countries and lineups at any time.
`,
  },

  {
    title: "5. Rider Selection",
    content: `
Each country is represented by two official riders and one reserve rider.

Selections may be based on:

• Real-world performance
• Nationality
• Popularity
• Entertainment value

The organizer reserves full authority over substitutions, injuries, rider replacements, and team changes.
`,
  },

  {
    title: "6. Motorcycle Regulations",
    content: `
Each team uses motorcycles featuring national colors, custom liveries, and unique visual identities.

The championship assumes balanced motorcycle performance between nations.

All custom motorcycle designs and branding created for the GP World Cup are original creative assets produced for this project.
`,
  },

  {
    title: "7. Race Weekend Format",
    content: `
Friday:
• Free Practice 1
• Free Practice 2

Saturday:
• Free Practice 3
• Qualifying
• Sprint Race

Sunday:
• Warm Up
• Main Race

The organizer may modify the format when necessary.
`,
  },

  {
    title: "8. Starting Grid",
    content: `
The starting grid is determined by qualifying times.

Fastest rider starts from pole position.

In case of identical lap times, the rider who set the time first receives priority.
`,
  },

  {
    title: "9. Race Classification",
    content: `
To be classified, a rider must complete at least 90% of the race distance.

The finishing order is determined by completed distance and finish line crossing order.

Race direction decisions are final.
`,
  },

  {
    title: "10. Points System",
    content: `
Main Race:
1st — 25
2nd — 20
3rd — 16
4th — 13
5th — 11
6th — 10
7th — 9
8th — 8
9th — 7
10th — 6
11th — 5
12th — 4
13th — 3
14th — 2
15th — 1

Sprint Race:
1st — 12
2nd — 9
3rd — 7
4th — 6
5th — 5
6th — 4
7th — 3
8th — 2
9th — 1
`,
  },

  {
    title: "11. Championships",
    content: `
The GP World Cup includes:

• Riders Championship
• Nations Championship
`,
  },

  {
    title: "12. Penalties",
    content: `
Penalties may be issued for dangerous riding, track limit abuse, unsportsmanlike behavior, intentional collisions, false starts, or ignoring race direction instructions.

Possible penalties include warnings, time penalties, grid penalties, disqualification, points deductions, or championship exclusion.
`,
  },

  {
    title: "13. Fictional Nature of the Project",
    content: `
The GP World Cup is a fictional entertainment concept.

Results, rivalries, transfers, and storylines may include fictional or creative elements designed for audience entertainment purposes.
`,
  },

  {
    title: "14. Organizer Authority",
    content: `
The organizer reserves the right to:

• Modify regulations
• Adjust points systems
• Change schedules
• Alter rider lineups
• Update branding
• Interpret rules
• Make final sporting decisions at any time in the interest of the project.
`,
  },
  {
  title: "15. Media & Content Rights",
  content: `
The GP World Cup may publish:

• Images
• Videos
• Race graphics
• Rankings
• Promotional content
• Social media content
• Fan edits
• Digital artwork

All original GP World Cup branding and custom-created content belong to the project organizer unless otherwise stated.

Third-party intellectual property remains the property of its respective owners.
`,
},

{
  title: "16. Fictional Nature of the Project",
  content: `
The GP World Cup is a fictional entertainment concept.

Results, scenarios, rivalries, transfers, and storylines may include creative or fictional elements designed for audience entertainment.

The project should not be interpreted as:
• An official sporting competition
• An officially sanctioned world championship
• A replacement for existing championships
• A real-world governing body
`,
},

{
  title: "17. Social Media & Community",
  content: `
The GP World Cup encourages:

• Fan interaction
• Community discussion
• Creative participation
• National support
• Fantasy championship debates

Users may share GP World Cup content for non-commercial fan purposes while respecting applicable copyright laws.
`,
},

{
  title: "18. Organizer Authority",
  content: `
The organizer reserves the right to:

• Modify regulations
• Adjust points systems
• Change schedules
• Alter rider lineups
• Update branding
• Remove participants
• Interpret rules
• Make final sporting decisions at any time in the interest of the project.
`,
},
];