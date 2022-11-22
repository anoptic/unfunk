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

type HomepageModelEntry = ExtractModelType<
  typeof import('../contentful/content-models')['homepageModel']
>;
type HomepageModelFields = HomepageModelEntry['fields'];

type BlogpostModelEntry = ExtractModelType<
  typeof import('../contentful/content-models')['blogpostModel']
>;
type BlogpostModelFields = BlogpostModelEntry['fields'];

type CollectionModelEntry = ExtractModelType<
  typeof import('../contentful/content-models')['collectionModel']
>;
type CollectionModelFields = CollectionModelEntry['fields'];
