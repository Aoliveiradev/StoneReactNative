import {ObservableInput} from 'rxjs';
import {CollectionListResponse} from './CollectionListResponse';
import {fromFetch} from 'rxjs/fetch';

export class CollectionRepository {
  private basePath =
    'https://gist.githubusercontent.com/Aoliveiradev/8f3e4f5b0cc983e511af13eb3866fe4f/raw/27df870091a3d05b44925a6b8ad41cd031cc4276/stone_list.json';

  public list() {
    return fromFetch<CollectionListResponse>(this.basePath, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      selector(response: Response): ObservableInput<CollectionListResponse> {
        return response.text().then(responseText => JSON.parse(responseText));
      },
    }).toPromise();
  }
}
