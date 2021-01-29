import Realm from 'realm';

import User from '../schemas/UserSchema';

export default function getRealm() {
  return Realm.open({
    schema: [User]
  })
}
