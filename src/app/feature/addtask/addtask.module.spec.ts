import { AddtaskModule } from './addtask.module';

describe('AddtaskModule', () => {
  let addtaskModule: AddtaskModule;

  beforeEach(() => {
    addtaskModule = new AddtaskModule();
  });

  it('should create an instance', () => {
    expect(addtaskModule).toBeTruthy();
  });
});
