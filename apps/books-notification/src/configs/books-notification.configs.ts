export const BooksNotificationConfig = {
  KAFKA_SERVICE_NAME: 'KAFKA_BOOKS_API',
  KAFKA_GROUP_ID: 'KAFKA_BOOKS_GROUP_ID',
};

export const BooksNotificationTopics = {
  USER_CREATED: process.env.USER_CREATED_TOPIC,
  BOOK_CREATED: process.env.BOOK_CREATED_TOPIC,
  SEND_EMAIL: process.env.SEND_EMAIL_TOPIC,
};
