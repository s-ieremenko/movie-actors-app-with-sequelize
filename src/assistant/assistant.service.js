import Assistant from './assistant.model.js';

export const getAllAsistants = async () => {
  const assistants = await Assistant.findAll();
  if (assistants.length === 0) {
    throw new Error('No assistants found');
  }
  return assistants;
};

export const deleteAssistant = async (name) => {
  const assistant = await Assistant.findOne({ where: { name } });
  if (!assistant) {
    throw new Error('No such an assistant');
  }
  await assistant.destroy();
};
