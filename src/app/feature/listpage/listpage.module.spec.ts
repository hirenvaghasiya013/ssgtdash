import { ListpageModule } from './listpage.module';

describe('ListpageModule', () => {
  let listpageModule: ListpageModule;

  beforeEach(() => {
    listpageModule = new ListpageModule();
  });

  it('should create an instance', () => {
    expect(listpageModule).toBeTruthy();
  });
});
