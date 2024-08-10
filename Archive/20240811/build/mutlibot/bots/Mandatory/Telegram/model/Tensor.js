const tf = require('@tensorflow/tfjs');
const { GenerativeAdversarialNetwork } = require('@tensorflow-models/generative-adversarial-network');
const { Model } = require('@huggingface/gen-pytorch-model');

const model = new Model({
// Chargez le modèle GAN
  modelId: 'hf-internal-testing/tiny-gan',
});

// Chargez le modèle GAN
await model.ready();
