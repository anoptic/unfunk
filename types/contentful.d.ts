// Get inner type of Array or Promise
type Inner<T> = T extends Array<infer U1>
  ? U1
  : T extends Promise<infer U2>
  ? U2
  : T;

// Helper type to extract a model's type from the model object
type ExtractModelType<
  Model extends ReturnType<
    typeof import('../contentful/create-contentful-model')['createContentfulModel']
  >
> = Inner<Inner<ReturnType<Model['getAll']>>>;
