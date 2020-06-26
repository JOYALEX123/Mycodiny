// create the audio context
let context = new AudioContext();
// create a gain node
let gain = context.createGain();
// connect the gain node to the context destination
gain.connect(context.destination);
// create an oscillator node
let osci = context.createOscillator();
AudioDestinationNode {maxChannelCount: 2, context: AudioContext, numberOfInputs: 1, numberOfOutputs: 0, channelCount: 2, …}
// set the oscillation type
osci.type = 'sawtooth';
// set the oscillation frequency
osci.frequency.value = 100;
100
// connect the oscillator node to the gain node
osci.connect(gain);
// start the oscillation node playing
osci.start();