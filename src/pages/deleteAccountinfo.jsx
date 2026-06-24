export default function DeleteAccount() {
  return (
    <div className="max-w-3xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Spotlight Account Deletion
      </h1>

      <p className="mb-4">
        Users can request deletion of their Spotlight account and data by
        emailing:
      </p>

      <div className="bg-zinc-900 p-4 rounded-xl mb-6">
        <p className="font-semibold">
          spotlight.support44@gmail.com
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-3">
        Request Format
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Username</li>
        <li>Email used for Spotlight</li>
        <li>Subject: Delete My Spotlight Account</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        Data Deleted
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Account information</li>
        <li>Profile information</li>
        <li>Posts</li>
        <li>Stories</li>
        <li>Notes</li>
        <li>Messages</li>
        <li>Followers and following data</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        Retention Period
      </h2>

      <p>
        Approved deletion requests are processed within 30 days.
      </p>
    </div>
  );
}