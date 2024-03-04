class MeetAudio {
  page: unknown;
  constructor(page: unknown) {
    // https://stackoverflow.com/questions/52464583/possible-to-get-puppeteer-audio-feed-and-or-input-audio-directly-to-puppeteer
    // Could not get this to work yet

    this.page = page;
  }

  async stream(_source: unknown) {
    // Stream audio
  }

  async stop() {
    // Stop audio stream
  }
}

export default MeetAudio;
