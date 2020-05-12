/* eslint-disable consistent-return */
import dataItem from '../data/topicData';

export const fetchThreads = async (page = 1) => {
  try {
    const response = await fetch(
      `https://v-forum-api.bahdcasts.com/api/threads?page=${page}`,
    );
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchThread = async (id) => {
  try {
    const response = await fetch(
      `https://v-forum-api.bahdcasts.com/api/threads/show/${id}`,
    );
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchReplies = async (id, page) => {
  try {
    const response = await fetch(
      `https://v-forum-api.bahdcasts.com/api/threads/${id}/replies?page=${page}`,
    );
    const data = await response.json();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
export const fetchTopics = async () => {
  const response = await dataItem();
  return response;
};
