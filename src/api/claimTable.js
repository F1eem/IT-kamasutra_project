export default [
    {
        claimId: 'SD123',
        date: '01.10.2020',
        service: 'Мобильная связь',
        problem: 'Позвонить, полный недозвон (БОЛЕЕ одного номера) / отказ от совершения вызова',
        description:
            'Товарищи! У меня возникла серьёзная проблема! Её нужно немедленно устранить! И это будет очень длинное описание для проверки обрезки длинных описаний',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'in_progress',
        unreadMessages: 11
    },
    {
        claimId: 'SD124',
        date: '02.10.2020',
        service: 'ВАТС',
        problem: 'Интернет, низкая скорость /разрывы соединения',
        description: 'Низкая скорость интернета!',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'stopped',
        unreadMessages: 0
    },
    {
        claimId: 'SD125',
        date: '03.10.2020',
        service: 'Мобильная связь',
        problem: 'Отсутствие покрытия сети / Ухудшение привычного уровня сигнала',
        description:
            'Товарищи! У меня возникла серьёзная проблема! Её нужно немедленно устранить! И это будет очень длинное описание для проверки обрезки длинных описаний',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'completed',
        unreadMessages: 1
    },
    {
        claimId: 'SD126',
        date: '04.10.2020',
        service: 'ВАТС',
        problem: 'Позвонить, обрывы, ухудшение качества разговора',
        description: 'Практически не слышу собеседника, постоянно обрывается связь.',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'waiting_info',
        unreadMessages: 1
    },
    {
        claimId: 'SD127',
        date: '05.10.2020',
        service: 'Мобильная связь',
        problem: 'Позвонить, полный недозвон (БОЛЕЕ одного номера) / отказ от совершения вызова',
        description: 'Просто сбрасывает при дозвоне на любые номера',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'completed',
        unreadMessages: 0
    },
    {
        claimId: 'SD128',
        date: '06.10.2020',
        service: 'ВАТС',
        problem: 'Отсутствие покрытия сети / Ухудшение привычного уровня сигнала',
        description: 'Практически не слышу собеседника, постоянно обрывается связь.',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'completed',
        unreadMessages: 0
    },
    {
        claimId: 'SD129',
        date: '07.10.2020',
        service: 'Мобильная связь',
        problem: 'Интернет, низкая скорость /разрывы соединения',
        description: 'Практически не слышу собеседника, постоянно обрывается связь.',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'waiting_info',
        unreadMessages: 11
    },
    {
        claimId: 'SD130',
        date: '08.10.2020',
        service: 'ВАТС',
        problem: 'Позвонить, полный недозвон (БОЛЕЕ одного номера) / отказ от совершения вызова',
        description: 'Практически не слышу собеседника, постоянно обрывается связь.',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'completed',
        unreadMessages: 0
    },
    {
        claimId: 'SD131',
        date: '09.10.2020',
        service: 'Мобильная связь',
        problem: 'Позвонить, полный недозвон (БОЛЕЕ одного номера) / отказ от совершения вызова',
        description: 'Практически не слышу собеседника, постоянно обрывается связь.',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'completed',
        unreadMessages: 0
    },
    {
        claimId: 'SD132',
        date: '10.10.2020',
        service: 'Мобильная связь',
        problem: 'Позвонить, полный недозвон (БОЛЕЕ одного номера) / отказ от совершения вызова',
        description: 'Практически не слышу собеседника, постоянно обрывается связь.',
        address: 'Новокарантинная д5 к3',
        contacts: '8 (930) 666 00 77',
        problemNumber: '8 (930) 666 00 77',
        status: 'stopped',
        unreadMessages: 0
    }
];

export const claimDict = {
    date: { title: 'Дата' },
    service: { title: 'Услуга', inOneClaimTable: true },
    problem: { title: 'Проблема', inOneClaimTable: true },
    description: { title: 'Описание' },
    address: { title: 'Адрес', inOneClaimTable: true },
    contacts: { title: 'Контакты', inOneClaimTable: true },
    problemNumber: { title: 'Проблемный номер', inOneClaimTable: true },
    status: { title: 'Статус' },
    preferences: { title: 'Предпочтения по связи', inOneClaimTable: true },
    problemNumber2: { title: 'Проблемный номер 2', inOneClaimTable: true },
    phoneModel: { title: 'Модель телефона', inOneClaimTable: true },
    problemFrequency: { title: 'Частота проблемы', inOneClaimTable: true },
    problemPlace: { title: 'Место возникновения проблемы', inOneClaimTable: true },
    networkAvailable: { title: 'Наличие сети', inOneClaimTable: true },
    networkType: { title: 'Тип сети', inOneClaimTable: true },
    signal: { title: 'Уровень сигнала на телефоне', inOneClaimTable: true }
};
