class C1<+T, -U> {}
function f<+T, -U>() {}
type T<+T, -U> = {}
type T1 = { +p: T }
type T2 = { -p: T }
type T3 = { +[k:K]: V }
type T4 = { -[k:K]: V }
interface I { +p: T }
interface I { -p: T }
interface I { +[k:K]: V }
interface I { -[k:K]: V }
declare class I { +p: T }
declare class I { -p: T }
declare class I { +[k:K]: V }
declare class I { -[k:K]: V }
class C2 { +p: T }
class C3 { -p: T }
