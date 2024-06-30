/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("verses")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("verses").insert([
        {
          emotion: "joy",
          verse: "Nehemiah 8:10",
          text: "The joy of the Lord is your strength.",
        },
        {
          emotion: "joy",
          verse: "Psalm 30:5",
          text: "Weeping may stay for the night, but rejoicing comes in the morning.",
        },
        {
          emotion: "joy",
          verse: "Philippians 4:4",
          text: "Rejoice in the Lord always. I will say it again: Rejoice!",
        },
        {
          emotion: "fear",
          verse: "Isaiah 41:10",
          text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
        },
        {
          emotion: "fear",
          verse: "2 Timothy 1:7",
          text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
        },
        {
          emotion: "fear",
          verse: "Psalm 23:4",
          text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
        },
        {
          emotion: "anger",
          verse: "Ephesians 4:26",
          text: "In your anger do not sin: Do not let the sun go down while you are still angry.",
        },
        {
          emotion: "anger",
          verse: "Proverbs 15:1",
          text: "A gentle answer turns away wrath, but a harsh word stirs up anger.",
        },
        {
          emotion: "anger",
          verse: "James 1:19-20",
          text: "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.",
        },
        {
          emotion: "sadness",
          verse: "Psalm 34:18",
          text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        },
        {
          emotion: "sadness",
          verse: "Revelation 21:4",
          text: "‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.",
        },
        {
          emotion: "sadness",
          verse: "Matthew 5:4",
          text: "Blessed are those who mourn, for they will be comforted.",
        },
        {
          emotion: "peace",
          verse: "John 14:27",
          text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
        },
        {
          emotion: "peace",
          verse: "Philippians 4:7",
          text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
        },
        {
          emotion: "peace",
          verse: "Colossians 3:15",
          text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful.",
        },
        {
          emotion: "love",
          verse: "1 Corinthians 13:4-7",
          text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
        },
        {
          emotion: "love",
          verse: "John 15:12",
          text: "My command is this: Love each other as I have loved you.",
        },
        {
          emotion: "love",
          verse: "1 John 4:18",
          text: "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
        },
      ]);
    });
};
