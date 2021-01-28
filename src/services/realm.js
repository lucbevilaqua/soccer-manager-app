import Realm from 'realm';

import Repository from '../schemas/RepositorySchema';

export default function getRealm() {
  return Realm.open({
    schema: [Repository]
  })
}
