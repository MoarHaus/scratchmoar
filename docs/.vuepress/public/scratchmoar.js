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
Scratch.extensions.register(new Scratchmoar())