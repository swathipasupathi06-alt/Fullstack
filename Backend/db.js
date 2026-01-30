import AWS from "aws-sdk";

AWS.config.update({ region: "ap-south-1" });

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE = "TodoTasks";

export const createTask = async (task) => {
  const params = {
    TableName: TABLE,
    Item: task
  };
  await dynamo.put(params).promise();
};

export const getTasks = async () => {
  const params = { TableName: TABLE };
  const result = await dynamo.scan(params).promise();
  return result.Items;
};

export const updateTask = async (id, updates) => {
  const params = {
    TableName: TABLE,
    Key: { id },
    UpdateExpression: "set #t = :t, #d = :d, #ti = :ti, #c = :c",
    ExpressionAttributeNames: {
      "#t": "task",
      "#d": "date",
      "#ti": "time",
      "#c": "completed"
    },
    ExpressionAttributeValues: {
      ":t": updates.task,
      ":d": updates.date,
      ":ti": updates.time,
      ":c": updates.completed
    }
  };
  await dynamo.update(params).promise();
};

export const deleteTask = async (id) => {
  const params = { TableName: TABLE, Key: { id } };
  await dynamo.delete(params).promise();
};
