import { beautifyKey, tt, strReplaceAll } from '@xy-form/ui-schema/Utils/beautify'

describe('strReplaceAll', () => {
    test.each(([
        ['user_name_street', '_', ' ', 'user name street'],
        ['user_name_street', 'e', 'f', 'usfr_namf_strfft'],
    ] as [string, string, string, string][]))(
        'strReplaceAll(%s, %s, %s)',
        (str, search, replacement, expected) => {
            expect(strReplaceAll(str, search, replacement)).toBe(expected)
        }
    )
})

describe('beautifyKey', () => {
    test.each(([
        ['user_name', undefined, 'User Name'],
        ['user_name', true, 'User Name'],
        ['user__name', true, 'User Name'],
        ['user.name', true, 'User Name'],
        ['user-name', true, 'User Name'],
        ['user--name', true, 'User Name'],
        ['user.-_name', true, 'User Name'],
        ['user.-._name', true, 'User Name'],
        ['user.-.._name', true, 'User Name'],
        [1, true, 1],
        ['user_name', false, 'user_name'],
        ['user_name', 0, 'user_name'],
        ['user_name', '', 'user_name'],
        ['user_name', 'not-implemented', 'user_name'],
        ['user_NAME', 'lower', 'user_name'],
        ['user_NAME', 'lower-beauty', 'user name'],
        ['user_name', 'upper', 'USER_NAME'],
        ['user_name', 'upper-beauty', 'USER NAME'],
        [10, 'lower', 10],
        [10, 'lower-beauty', 10],
        [10, 'upper', 10],
        [10, 'upper-beauty', 10],
        ['user_name', 'beauty-text', 'User Name'],
        ['-1', 'beauty-text', '-1'],
        ['-1.0', 'beauty-text', '-1.0'],
        ['1.0', 'beauty-text', '1.0'],
        ['10', 'beauty-text', '10'],
        ['no-start', 'beauty-igno-lead', 'No Start'],
        ['.-_no-start', 'beauty-igno-lead', '.-_No Start'],
        ['.no-start', 'beauty-igno-lead', '.No Start'],
        ['-no-start', 'beauty-igno-lead', '-No Start'],
        ['_no-start', 'beauty-igno-lead', '_No Start'],
        [1, 'beauty-igno-lead', 1],
        ['text', 'ol', 'text'],
        [0, 'ol', '1.'],
        [1, 'ol', '2.'],
        ['user_name', 'ol', 'user_name'],
    ] as [string, tt, string][]))(
        'beautifyKey(%j, %s)',
        (name, tt, expected) => {
            expect(beautifyKey(name, tt)).toBe(expected)
        }
    )
})
