import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerVideos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Videos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly item?: string | null;
  readonly title?: string | null;
  readonly filename?: string | null;
  readonly label?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Videos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url?: string | null;
  readonly item?: string | null;
  readonly title?: string | null;
  readonly filename?: string | null;
  readonly label?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Videos = LazyLoading extends LazyLoadingDisabled ? EagerVideos : LazyVideos

export declare const Videos: (new (init: ModelInit<Videos>) => Videos) & {
  copyOf(source: Videos, mutator: (draft: MutableModel<Videos>) => MutableModel<Videos> | void): Videos;
}