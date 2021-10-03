import { Http, HttpResponse } from "@nativescript/core";
import { HttpMethods } from '@/modules/core';

type ServiceResult = {
  success: boolean;
  // tslint:disable-next-line: no-any
  data?: any;
};

enum StatusCode {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

class Example {
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
  public async postData(payload: string, payloadObject: {}): Promise<ServiceResult> {
    const result: ServiceResult = { success: false };

    try {
      const { statusCode, content }: HttpResponse = await Http.request({
        url: `<endpoint-name>`,
        method: HttpMethods.POST,
        headers: { "Content-Type": "application/json" },
        content: payload ?? JSON.stringify(payloadObject),
      });

      result.success = statusCode === StatusCode.OK;
      if(content !== undefined) {
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

const service = new Example();

export {
  service as default,
  service as Example,
};
