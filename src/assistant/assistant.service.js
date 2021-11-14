import Assistant from './assistant.model.js';
import Director from '../director/director.model.js';

export const getAllAsistants = async () => {
  const assistants = await Assistant.findAll();
  if (assistants.length === 0) {
    throw new Error('No assistants found');
  }
  return assistants;
};


export const createAssistant = async (name, age, email, start) => {


  const existingAssistant = await Assistant.findOne({ where: { email } });
  if (existingAssistant) {
    throw new Error('Assistant already exists');
  }

  const workingDuration = new Date().getFullYear() - start;
  await Assistant.create({
    name,
    age,
    email,
    start,
    workingDuration,
  });

};

export const setAssistantToDirector = async (assistantUuid, directorUuid) => {
  const assistant = await Assistant.findByPk(assistantUuid);
  const director = await Director.findByPk(directorUuid);
  if (!assistant) {
    throw new Error('No assistant with such uuid');
  }
  if (!director) {
    throw new Error('No director with such uuid');
  }
  await assistant.setDirector(director);
};

export const deleteAssistant = async (name) => {
  const assistant = await Assistant.findOne({ where: { name } });
  if (!assistant) {
    throw new Error('No such an assistant');
  }
  await assistant.destroy();
};
