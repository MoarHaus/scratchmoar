class Scratchmoar {
  constructor () {
    console.log(this)
  }

  getInfo () {
    return {
      id: 'scratchmoar',
      name: 'Moooar',
      blocks: [
        {
          opcode: 'scratchmoarTest',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Test',
        },
      ],
    }
  }

  scratchmoarTest () {
    return 'Hello, world!'
  }
}

// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar())
export default Scratchmoar