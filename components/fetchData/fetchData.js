import Contentstack from "contentstack";
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT_NAME
);

function fetchData(contentType, entryId = null) {
  try {
    if (entryId) {
      let Query = Stack.ContentType(contentType).Entry(entryId);
      let entry = Query.fetch().then(
        function success(entry) {
          return entry.toJSON();
        },
        function error(err) {
          console.log("Error", err);
        }
      );
      return entry;
    } else {
      let Query = Stack.ContentType(contentType).Query();
      let entry = Query.toJSON().find();
      return entry;
    }
  } catch (err) {
    console.log(err);
  }
}

export default fetchData;
