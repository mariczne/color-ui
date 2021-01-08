export type ClarifaiError = {
  response?: {
    data?: {
      outputs?: Array<{
        status?: {
          details: string;
          description: string;
        };
      }>;
    };
  };
};
