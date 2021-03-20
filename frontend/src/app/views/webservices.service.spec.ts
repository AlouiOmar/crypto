import { TestBed, inject } from "@angular/core/testing";

import { WebServices } from "./webservices.service";

describe("WebServices", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebServices],
    });
  });

  it("should be created", inject([WebServices], (service: WebServices) => {
    expect(service).toBeTruthy();
  }));
});
