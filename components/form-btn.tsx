interface formButtonProps {
    loading: boolean;
    text: string;
}

export default function FormButton({loading, text} : formButtonProps) {
    return (
        <button disabled={loading} className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed">{loading ? "Loading..." : text}</button>
    )
}