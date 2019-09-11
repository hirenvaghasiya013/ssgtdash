import { EdittaskModule } from './edittask.module';

describe('EdittaskModule', () => {
  let edittaskModule: EdittaskModule;

  beforeEach(() => {
    edittaskModule = new EdittaskModule();
  });

  it('should create an instance', () => {
    expect(edittaskModule).toBeTruthy();
  });
});
