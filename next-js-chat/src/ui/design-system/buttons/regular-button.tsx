'use client';

type Props = {
    name: string;
    serverAction?(): Promise<void>;
}

export default function RegularButton( { name, serverAction } : Props ) {
return <button name={name} className=" bg-slate-500 rounded-md text-white py-2 px-3 transition-transform transform hover:bg-slate-600 hover:scale-105"
        onClick={() => !serverAction ? "" : serverAction()}>
    {name}

</button>;
}
