class Github {
  constructor() {
    this.client_id = 'c0b7de384c6ee72c5fc0'
    this.client_secret = '89f9780299beaea5bd099b0fae2f061bdcfafa24';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}