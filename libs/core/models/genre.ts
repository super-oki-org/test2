import { Immerable, OmitImmerable } from './immerable';

/** Genre. */
export class Genre extends Immerable {

  /** Id. */
  public readonly id: number;

  /** Name. */
  public readonly name: string;

  public constructor(data: PostInitArgs) {
    super();
    this.id = data.id;
    this.name = data.name;
  }
}

type PostInitArgs = OmitImmerable<Genre>;
