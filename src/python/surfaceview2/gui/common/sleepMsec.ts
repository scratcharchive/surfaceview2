const sleepMsec = (m: number) => new Promise(r => setTimeout(r, m));

export default sleepMsec