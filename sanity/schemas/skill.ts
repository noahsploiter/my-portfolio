

export default ({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the skill",
      type: "string"
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: "Progress of skill 0 to 100%",
      validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.min(0).max(100),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],

})
