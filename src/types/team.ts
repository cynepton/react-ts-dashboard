enum MemberAccess {
    MANAGER = 'manager',
    ADMIN = 'admin',
    USER = 'user',
}

interface Member {
    id: number;
    name: `${string} ${string}`;
    email: `${string}@${string}.${string}`;
    age: number;
    phone: string;
}

export interface TeamMember extends Member {
    access: `${MemberAccess}`;
}

export interface TeamMemberContactDetail extends Member {
    address: string;
    city: string;
    zipCode: string;
    registrarId: number;
}
