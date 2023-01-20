export abstract class UseCase<Output> {
  public abstract execute(): Promise<Output>;
}
