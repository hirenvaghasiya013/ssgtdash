import { ViewtaskModule } from './viewtask.module';

describe('ViewtaskModule', () => {
  let viewtaskModule: ViewtaskModule;

  beforeEach(() => {
    viewtaskModule = new ViewtaskModule();
  });

  it('should create an instance', () => {
    expect(viewtaskModule).toBeTruthy();
  });
});
