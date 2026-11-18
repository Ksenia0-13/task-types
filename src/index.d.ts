type Person = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

type Employee = Person & {
    company: string;
};

export function getPersons(): Person[];
export function personToString(person: Person | Employee): string;
