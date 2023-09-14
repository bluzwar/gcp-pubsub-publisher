process.env.GOOGLE_APPLICATION_CREDENTIALS = '../json-keys/service-account-pubsub-publisher.json';

const topicNameOrId = 'projects/learning-gcp-396121/topics/topic-1';
const data = JSON.stringify({foo: 'bar'});

const {PubSub} = require('@google-cloud/pubsub');

const pubSubClient = new PubSub(); 

async function publishMessage(topicNameOrId, data) {
    const dataBuffer = Buffer.from(data);
  
    try {
      const messageId = await pubSubClient
        .topic(topicNameOrId)
        .publishMessage({data: dataBuffer});
      console.log(`Message ${messageId} published.`);
    } catch (error) {
      console.error(`Received error while publishing: ${error.message}`);
      process.exitCode = 1;
    }
  }

for (let i = 0; i < 10; i++){
    publishMessage(topicNameOrId, data)
    console.log(`Message ${i} published.`);
}
  


