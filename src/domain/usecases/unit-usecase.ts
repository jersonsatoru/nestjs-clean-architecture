export abstract class UseCase<Input> {
  public abstract execute(input: Input): void;
}
