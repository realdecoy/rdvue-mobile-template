enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

class __SERVICE__ {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------
  constructor() {
    //
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async submitData(payload: string, payloadObject: {}): Promise<{}> {
    const result = { success: false };

    try {
      const { statusCode, content }: HttpResponse = await Http.request({
        url: "<endpoint-name>",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        content: payload ?? JSON.stringify(payloadObject),
      });

      result.success = statusCode === StatusCode.OK;
      if (content !== undefined) {
        result.data = content.toJSON();
      }
    } catch (error) {
      //TODO: Handle error
    }

    return result;
  }

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------
}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const service = new __SERVICE__();

export { service as default };
