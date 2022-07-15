import {ObservableInput} from 'rxjs';
import {CollectionListResponse} from './CollectionListResponse';
import {fromFetch} from 'rxjs/fetch';

export class CollectionRepository {
  private basePath =
    'https://gist.githubusercontent.com/Aoliveiradev/f88a9d4ea41b917c483c8a0846a97f50/raw/3e34803b1c4dc264887006e5a0cface27d83f7fe/stone_list.json';

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
